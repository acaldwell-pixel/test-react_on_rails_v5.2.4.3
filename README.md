## Create Rails project

`rails _5.2.4.3_ new --database=postgresql --skip-sprockets -J --no-skip-turbolinks --webpack=react test-react_on_rails_v5.2.4.3`

`bundle add react_on_rails`

`echo 'gem "rspec-rails", group: [:development, :test]' >> Gemfile`

`bundle install`

`rails generate rspec:install`

`rails generate react_on_rails:install`

## What to do next:

- See the documentation on https://github.com/rails/webpacker/blob/master/docs/webpack.md
    for how to customize the default webpack configuration.

- Include your webpack assets to your application layout.

    `<%= javascript_pack_tag 'hello-world-bundle' %>`

- Run `rails s` to start the Rails server and use Webpacker's default lazy compilation.

- Visit http://localhost:3000/hello_world and see your React On Rails app running!

- Run bin/webpack-dev-server to start the Webpack dev server for compilation of Webpack
    assets as soon as you save. This default setup with the dev server does not work
    for server rendering

- Alternately, you may turn off compile in config/webpacker.yml and run the foreman
    command to start the rails server and run webpack in watch mode.

    `foreman start -f Procfile.dev`

- To turn on HMR, edit config/webpacker.yml and set HMR to true. Restart the rails server
    and bin/webpack-dev-server. Or use Procfile.dev-hmr.

- To server render, change this line app/views/hello_world/index.html.erb to
    `prerender: true` to see server rendering (right click on page and select "view source").

    `<%= react_component("HelloWorldApp", props: @hello_world_props, prerender: true) %>`