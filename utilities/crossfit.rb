require 'nokogiri'
require 'open-uri'
require 'json'
require 'byebug'

base_url = 'http://games.crossfit.com/athlete/'

athletes = []

(86..15000).each do |number|
  puts number
  doc = Nokogiri::HTML(open(base_url + number.to_s))
  name = doc.css('#page-title').children.text.split(': ')[1]
  next if name == 'Not found'

  athlete = {}

  athlete['Name'] = doc.css('#page-title').children.text.split(': ')[1]
  athlete['id'] = number.to_s
  # Get all the profile details
  profile_details = doc.css('.profile-details dl dd')
  athlete['Region'] = profile_details.children[0].children.text
  if profile_details.children.size == 5
    athlete['Gender'] = profile_details.children[1].text
    athlete['Age'] = profile_details.children[2].text.to_i
    athlete['Height'] = profile_details.children[3].text
    athlete['Weight'] = { 'value' => profile_details.children[4].text.split(' ')[0].to_f, 'unit' => 'lb' }
  elsif profile_details.children.size == 6
    athlete['Affiliate'] = profile_details.children[1].children.text
    athlete['Gender'] = profile_details.children[2].text
    athlete['Age'] = profile_details.children[3].text.to_i
    athlete['Height'] = profile_details.children[4].text
    athlete['Weight'] = { 'value' => profile_details.children[5].text.split(' ')[0].to_f, 'unit' => 'lb' }
  elsif profile_details.children.size == 7
    athlete['Team'] = profile_details.children[1].children.text
    athlete['Affiliate'] = profile_details.children[2].children.text
    athlete['Gender'] = profile_details.children[3].text
    athlete['Age'] = profile_details.children[4].text.to_i
    athlete['Height'] = profile_details.children[5].text
    athlete['Weight'] = { 'value' => profile_details.children[6].text.split(' ')[0].to_f, 'unit' => 'lb' }
  end
  # Get all the workout stats
  profile_stats = doc.css('.profile-stats table')
  athlete['Workouts'] = {}
  athlete['Workouts']['Fran'] = profile_stats.children[1].children[1].text
  athlete['Workouts']['Helen'] = profile_stats.children[2].children[1].text
  athlete['Workouts']['Grace'] = profile_stats.children[3].children[1].text
  athlete['Workouts']['Filthy 50'] = profile_stats.children[4].children[1].text
  athlete['Workouts']['Fight Gone Bad'] = profile_stats.children[5].children[1].text
  athlete['Workouts']['Sprint 400m'] = profile_stats.children[6].children[1].text
  athlete['Workouts']['Run 5k'] = profile_stats.children[7].children[1].text
  # Get all the maxes
  athlete['Maxes'] = {}
  athlete['Maxes']['Clean & Jerk'] = { 'value' => profile_stats.children[9].children[1].text.split(' ')[0].to_f, 'unit' => 'lb' }
  athlete['Maxes']['Snatch'] = { 'value' => profile_stats.children[10].children[1].text.split(' ')[0].to_f, 'unit' => 'lb' }
  athlete['Maxes']['Deadlift'] = { 'value' => profile_stats.children[11].children[1].text.split(' ')[0].to_f, 'unit' => 'lb' }
  athlete['Maxes']['Back Squat'] = { 'value' => profile_stats.children[12].children[1].text.split(' ')[0].to_f, 'unit' => 'lb' }
  athlete['Maxes']['Max Pull-ups'] = profile_stats.children[13].children[1].text.to_i
  # Get the open results
  leaderboard_url = 'http:' + doc.css('#cf_leaderboard')[0].attributes['src'].value
  leaderboard = Nokogiri::HTML(open(leaderboard_url))
  athlete['Open Results'] = {}
  next if leaderboard.css('.highlight .number').empty?
  athlete['Open Results']['Position'] = leaderboard.css('.highlight .number').children.first.text.split(' ').first.to_i
  athlete['Open Results']['Workouts'] = { '01' => {}, '02' => {}, '03' => {}, '04' => {}, '05' => {} }

  position = leaderboard.css('.highlight .score-cell')[0].children[1].children[0].text.split(' ')
  athlete['Open Results']['Workouts']['01']['Position'] = position[0].to_i
  athlete['Open Results']['Workouts']['01']['Repetitions'] = position[1].gsub('(', '').gsub(')', '').to_i if position[1]
  position = leaderboard.css('.highlight .score-cell')[1].children[1].children[0].text.split(' ')
  athlete['Open Results']['Workouts']['02']['Position'] = position[0].to_i
  athlete['Open Results']['Workouts']['02']['Repetitions'] = position[1].gsub('(', '').gsub(')', '').to_i if position[1]
  position = leaderboard.css('.highlight .score-cell')[2].children[1].children[0].text.split(' ')
  athlete['Open Results']['Workouts']['03']['Position'] = position[0].to_i
  athlete['Open Results']['Workouts']['03']['Repetitions'] = position[1].gsub('(', '').gsub(')', '').to_i if position[1]
  position = leaderboard.css('.highlight .score-cell')[3].children[1].children[0].text.split(' ')
  athlete['Open Results']['Workouts']['04']['Position'] = position[0].to_i
  athlete['Open Results']['Workouts']['04']['Repetitions'] = position[1].gsub('(', '').gsub(')', '').to_i if position[1]
  position = leaderboard.css('.highlight .score-cell')[4].children[1].children[0].text.split(' ')
  athlete['Open Results']['Workouts']['05']['Position'] = position[0].to_i
  athlete['Open Results']['Workouts']['05']['Time'] = position[1].gsub('(', '').gsub(')', '') if position[1]

  athletes << athlete
end

File.open('./crossfit.json', 'w+').write(JSON.generate(athletes))
