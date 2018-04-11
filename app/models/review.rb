class Review < ApplicationRecord
  validates :user_id, :book_id, :rating, presence: true

  belongs_to :book,
  primary_key: :id,
  foreign_key: :book_id,
  class_name: :Book

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User


  def update_average_rating(args = {})
    default_args = {update: false, diff: 0, delete: false, create: false}
    args = default_args.merge(args)
    book = self.book()
    previous_average = book.average_rating.to_i
    quantity_ratings = book.reviews.length.to_i
    rating = self.rating.to_i

      if(args[:create])
          if(book.reviews.length == 0)
           book.update_attribute(:average_rating, rating)
          else
           new_avg = ((quantity_ratings) * (previous_average) + rating) / (quantity_ratings + 1.0).round(2)
           book.update_attribute(:average_rating, new_avg)
         end
     end



      if(args[:update])
        if(quantity_ratings == 1)
          book.update_attribute(:average_rating, rating)
        else
          new_avg = ((quantity_ratings) * (previous_average) + diff) / (quantity_ratings + 0.0).round(2)
          book.update_attribute(:average_rating, new_avg)
        end


      end


      if(args[:delete])
        if(quantity_ratings == 1)
          book.update_attribute(:average_rating, 0)
        else
          new_avg = ((quantity_ratings) * (previous_average) - rating) / (quantity_ratings - 1.0).round(2)
          book.update_attribute(:average_rating, new_avg)
        end

      end


  end








end
