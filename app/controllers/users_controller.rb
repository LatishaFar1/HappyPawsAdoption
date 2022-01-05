class UsersController < ApplicationController

    def create 
        user = User.create(user_params)
       if user.save
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {error: user.errors.full_messages}
        end
    end 

    def show 
        render json: User.find(session[:user_id], status: :ok)
    end


    private

    def user_params
        params.permit(:username, :password)
    end 
end
