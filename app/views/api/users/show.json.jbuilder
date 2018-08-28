json.partial! "api/users/user", user: @user
json.spot @user.spot, partial: 'api/spots/spot', as: :spot
