require 'csv'
require 'json'
require 'byebug'

def calculate_mean(array)
  size = array.size
  if size % 2 == 0
    middle = size / 2
    return (array[middle - 1] + array[middle + 1]) / 2
  else
    middle = (size / 2) + 1
    return array[middle]
  end
end

result = {}
resume = {}

CSV.foreach('fb_friends.csv', :headers => true) do |row|
  result[row['where']] = { 'stats' => { 'total' => 0, 'sum' => 0, 'values' => [] }, 'data' => [] } unless result.key?(row['where'])
  result[row['where']]['data'] << { 'name' => row['name'], 'mutual' => row['mutual'].to_i }
  result[row['where']]['stats']['values'] << row['mutual'].to_i
  result[row['where']]['stats']['sum'] += row['mutual'].to_i
  result[row['where']]['stats']['total'] += 1
end

result.each do |key, value|
  value['stats']['mean'] = value['stats']['sum'] / value['stats']['total']
  value['stats']['values'] = array = value['stats']['values'].sort
  value['stats']['median'] = calculate_mean(array)
  value['stats']['max'] = array[array.size - 1]
  value['stats']['min'] = array[0]
  resume[key] = { 'total' => value['stats']['total'],
                  'values' => array,
                  'mean' => value['stats']['mean'],
                  'median' => value['stats']['median'],
                  'max' => value['stats']['max'],
                  'min' => value['stats']['min'] }
end

File.open('fb_friends.json', 'w+').write(JSON.generate(result))
File.open('fb_friends_min.json', 'w+').write(JSON.generate(resume))
