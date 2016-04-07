require 'csv'
require 'json'

File.open('./primes.json', 'w+').write(
  CSV.parse(File.open('./primes.csv')).to_json
)
