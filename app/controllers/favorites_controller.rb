class FavoritesController < ApplicationController


    def index
        if logged_in?
            render json: current_user.favorites, status: :ok 
        else 
            render json: {errors: "Must be logged in"}, status: :unauthorized
        end 
    end 


    def create
        if logged_in?
            favorite = Favorite.new(user_id: current_user.id, pet_id: params[:pet_id])
            render json: favorite, status: :ok
        else 
            render json: {error: "Please Login to Favorite a pet"}, status: :unauthorized
        end 
    end 


    def update 
        if !logged_in?
            favorite = Favorite.find_by(user_id: current_user.id, pet_id:params[:pet_id])
            if favorite 
                if favorite.update(likes:params[:likes])
                    render json: favorite, status: :ok 
            else 
                render json: favorite.errors.full_messages, status: :unprocessable_entity
            end 
            render json: favorite, status: :ok
        else 
             render json: {errors: ["Favorite doesn't exist"]}, status: :unprocessable_entity
        end 
    end 

  


    def destroy 
        if logged_in?
            current_user.favorites.destroy(params[:id])
        else 
            render json: {errors: "Not deleted"}
        end 
    end


    def fav_params
        params.permit(:likes, :id)
    end 

end

end 