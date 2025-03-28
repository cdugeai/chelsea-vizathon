echo "Create app"
npx sv@latest create --no-install . \
  --template minimal \
  --types ts \
  --no-add-ons
echo "Add helpers eslint prettier tailwindcss vitest"
npx sv@latest add --no-preconditions --no-install \
  eslint \
  prettier \
  vitest \
  --tailwindcss none
echo "Add internationalization (paraglide)"
echo "> Answer YES to 'include demo' + add some languages"
npx sv@latest add --no-preconditions --no-install \
  paraglide
echo "Add db (drizzle), auth (lucia)"
npx sv@latest add --no-preconditions --no-install drizzle
echo "Install dependencies"
npm install
echo "Push db schema (auth tables)"
echo "> Answer YES to create auth tables"
npm run db:push
#npm db:push -- --force
echo "Open app"
npm run dev -- --open /demo