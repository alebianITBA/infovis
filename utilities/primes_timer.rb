require 'csv'
require_relative './primes'

OUTPUT_FILE = 'primes.csv'
generator = Primes.generator
size = 1_000_000

CSV.open(OUTPUT_FILE, 'w+') do |csv|
  size.times do
    start_time = Time.now
    number = generator.next
    end_time = Time.now
    csv << [number.to_s, "%.20f" % (end_time - start_time)]
  end
end
