# import vars from .env
export $(egrep -v '^#' .env | xargs)

# check if build flag was given (--build)
if [ "$1" == "--build" ]; then
  echo "Building the app"
  pnpm run build
fi

echo "Compressing files"
tar -czf .output.tar.gz .output

echo "Deploying to $DEPLOY_PATH"

# create the deploy path if it doesn't exist
echo "Creating the deploy path if it doesn't exist"
mkdir -p $DEPLOY_PATH

# Remove existing tarball from the server
echo "Removing existing tarball from the server"
rm $DEPLOY_PATH/.output.tar.gz

# copy the new tarball to the server
echo "Copying the tarball to the server"
cp .output.tar.gz $DEPLOY_PATH

# Remove the existing `.output` folder from the server
echo "Removing existing .output folder"
rm -rf $DEPLOY_PATH/.output

echo "Unzipping on the server (will take a while)"
tar -xzf $DEPLOY_PATH/.output.tar.gz -C $DEPLOY_PATH
echo "Done"

echo "Cleaning up - server"
rm $DEPLOY_PATH/.output.tar.gz

echo "Cleaning up - codebase"
rm -rf $CODE_PATH/.output.tar.gz

echo "Done! 🚀 "
