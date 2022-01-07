class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: "User cannot be found"}, status: :unauthorized
        end 
    end 


    def destroy
        session.destroy
        render json: {"loggedOut": true}
    end 
end
