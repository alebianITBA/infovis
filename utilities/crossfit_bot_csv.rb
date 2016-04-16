require 'nokogiri'
require 'open-uri'
require 'byebug'

base_url = 'http://games.crossfit.com/athlete/'

file = File.open('./crossfit.csv', 'a')
#id,name,region,team,affiliate,gender,age,height,height_unit,weight,weight_unit,w_fran,w_helen,w_grace,w_filthy,w_fight,w_sprint,w_run,m_cyj,m_cyj_unit,m_snatch,m_snatch_unit,m_deadlift,m_deadlift_unit,m_back,m_back_unit,m_pull,open_position,open01_position,open01_reps,open02_position,open02_reps,open03_position,open03_reps,open04_position,open04_reps,open05_position,open05_time
(22986..30000).each do |number|
  puts number
  doc = Nokogiri::HTML(open(base_url + number.to_s))
  name = doc.css('#page-title').children.text.split(': ')[1]
  next if name == 'Not found'

  athlete = ''

  athlete += number.to_s + ',' # id
  athlete += doc.css('#page-title').children.text.split(': ')[1] + ',' # name
  # Get all the profile details
  profile_details = doc.css('.profile-details dl dd')
  athlete += profile_details.children[0].children.text + ',' # region
  if profile_details.children.size == 5
    athlete += '--,' # team
    athlete += '--,' # affiliate
    athlete += profile_details.children[1].text + ',' # gender
    athlete += profile_details.children[2].text + ',' # age
    height = profile_details.children[3].text.split(' ')
    athlete += height[0].gsub('"', '').gsub("'", ' ') + ','# height
    height[1] ? (athlete += height[1] + ',') : (athlete += '--,')
    weight = profile_details.children[4].text.split(' ')
    athlete += weight[0] + ','
    weight[1] ? (athlete += weight[1] + ',') : (athlete += '--,') # weight
  elsif profile_details.children.size == 6
    athlete += '--,' # team
    athlete += profile_details.children[1].children.text + ','# affiliate
    athlete += profile_details.children[2].text + ',' # gender
    athlete += profile_details.children[3].text + ',' # age
    height = profile_details.children[4].text.split(' ')
    athlete += height[0].gsub('"', '').gsub("'", ' ') + ','# height
    height[1] ? (athlete += height[1] + ',') : (athlete += '--,')
    weight = profile_details.children[5].text.split(' ')
    athlete += weight[0] + ','
    weight[1] ? (athlete += weight[1] + ',') : (athlete += '--,') # weight
  elsif profile_details.children.size == 7
    athlete += profile_details.children[1].children.text + ',' # team
    athlete += profile_details.children[2].children.text + ',' # affiliate
    athlete += profile_details.children[3].text + ',' # gender
    athlete += profile_details.children[4].text + ',' # age
    height = profile_details.children[5].text.split(' ')
    athlete += height[0].gsub('"', '').gsub("'", ' ') + '--,'# height
    height[1] ? (athlete += height[1] + ',') : (athlete += ',')
    weight = profile_details.children[6].text.split(' ')
    athlete += weight[0] + ','
    weight[1] ? (athlete += weight[1] + ',') : (athlete += '--,') # weight
  end
  # Get all the workout stats
  profile_stats = doc.css('.profile-stats table')
  athlete += profile_stats.children[1].children[1].text + ',' # w_fran
  athlete += profile_stats.children[2].children[1].text + ',' # w_helen
  athlete += profile_stats.children[3].children[1].text + ',' # w_grace
  athlete += profile_stats.children[4].children[1].text + ',' # w_filthy
  athlete += profile_stats.children[5].children[1].text + ',' # w_fight
  athlete += profile_stats.children[6].children[1].text + ',' # w_sprint
  athlete += profile_stats.children[7].children[1].text + ',' # w_run
  # Get all the maxes
  cyj = profile_stats.children[9].children[1].text.split(' ')
  athlete += cyj[0] + ','# m_cyj
  cyj[1] ? (athlete += cyj[1] + ',') : (athlete += '--,')
  snatch = profile_stats.children[10].children[1].text.split(' ')
  athlete += snatch[0] + ',' # m_snatch
  snatch[1] ? (athlete += snatch[1] + ',') : (athlete += '--,')
  deadlift = profile_stats.children[11].children[1].text.split(' ')
  athlete += deadlift[0] + ',' # m_deadlift
  deadlift[1] ? (athlete += deadlift[1] + ',') : (athlete += '--,')
  back = profile_stats.children[12].children[1].text.split(' ')
  athlete += back[0] + ',' # m_back
  back[1] ? (athlete += back[1] + ',') : (athlete += '--,')
  athlete += profile_stats.children[13].children[1].text + ',' # m_pull
  # Get the open results
  leaderboard_url = 'http:' + doc.css('#cf_leaderboard')[0].attributes['src'].value
  leaderboard = Nokogiri::HTML(open(leaderboard_url))

  if leaderboard.css('.highlight .number').empty?
    athlete += '--,--,--,--,--,--,--,--,--,--,--'
    file.puts(athlete)
    next
  end

  athlete += leaderboard.css('.highlight .number').children.first.text.split(' ').first + ',' # open_position
  position = leaderboard.css('.highlight .score-cell')[0].children[1].children[0].text.split(' ')
  athlete += position[0].to_i.to_s + ',' # open01_position
  position[1] ? (athlete += position[1].gsub('(', '').gsub(')', '') + ',') : (athlete += '--,') # open01_reps

  position = leaderboard.css('.highlight .score-cell')[1].children[1].children[0].text.split(' ')
  athlete += position[0].to_i.to_s + ','
  position[1] ? (athlete += position[1].gsub('(', '').gsub(')', '') + ',') : (athlete += '--,')

  position = leaderboard.css('.highlight .score-cell')[2].children[1].children[0].text.split(' ')
  athlete += position[0].to_i.to_s + ','
  position[1] ? (athlete += position[1].gsub('(', '').gsub(')', '') + ',') : (athlete += '--,')

  position = leaderboard.css('.highlight .score-cell')[3].children[1].children[0].text.split(' ')
  athlete += position[0].to_i.to_s + ','
  position[1] ? (athlete += position[1].gsub('(', '').gsub(')', '') + ',') : (athlete += '--,')

  position = leaderboard.css('.highlight .score-cell')[4].children[1].children[0].text.split(' ')
  athlete += position[0].to_i.to_s + ','
  position[1] ? (athlete += position[1].gsub('(', '').gsub(')', '')) : (athlete += '--')

  file.puts(athlete)
end
