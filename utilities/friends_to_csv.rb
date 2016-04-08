require 'json'
require 'csv'
require 'byebug'

File.delete('fb_friends_min.csv') if File.exist?('fb_friends_min.csv')
json = JSON.parse(File.read('fb_friends_min.json'))
csv = File.open('fb_friends_min.csv', 'a+')
csv.puts('From,Mutual')
json.each do |key, value|
  value['values'].each do |friends|
    csv.puts("#{key},#{friends * 3}")
  end
end
