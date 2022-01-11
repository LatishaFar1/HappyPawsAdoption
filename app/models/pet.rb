class Pet < ApplicationRecord
    has_many :favorites

    def self.less_than 
        Pet.where("age < 3")
       
    end 
    # create a class method 
    # uses active record query methods 
    # grabs the pets that are < 3 y.o.
    # have a custom route called youngest 
    # the route returns all the pets that are < 3 y.o.
    # console.log it in the front end 
end
