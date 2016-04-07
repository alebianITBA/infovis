require 'json'
require 'csv'
require 'byebug'

File.delete('fb_friends.csv') if File.exist?('fb_friends.csv')
json = JSON.parse(File.read('fb_friends_min.json'))
csv = File.open('fb_friends.csv', 'a+')
csv.puts('From,Mutual')
json.each do |key, value|
  value['values'].each do |friends|
    csv.puts("#{key},#{friends}")
  end
end