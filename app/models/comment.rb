class Comment < ApplicationRecord
  validates :author, :text, presence: true
end
