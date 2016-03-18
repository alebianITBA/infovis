require 'json'

file = File.open('./definitions.txt', 'r')

def sanitize_word(word)
  word.gsub(/[^0-9A-Za-z]/, '').downcase
end
ans = {}

file.each_line do |line|
  array_line = line.split(' ')
  array_line.each do |word|
    sanitized_word = sanitize_word(word)
    if ans.key?(sanitized_word)
      ans[sanitized_word] += 1
    else
      ans[sanitized_word] = 1
    end
  end
end

exclude_words = %w(with this that is a an on in at since for to by)

numerous = ans.to_a.select { |array| array[1] > 4 && array[0].size > 3 && !exclude_words.include?(array[0]) }

File.open('./result.json', 'w+').write(JSON.generate(numerous.sort { |a, b| a[1] <=> b[1] }))
