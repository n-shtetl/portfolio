class ApplicationController < ActionController::Base
    def hello
        render html: 'hello, my name is max c phillips'
    end
end
