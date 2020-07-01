params="$1"
if [ "$params" == "dev" ] 
then
    react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
    cd android && ./gradlew assembleDebug
elif [ "$params" == "prod" ] 
then
    echo "PROD"
else
    echo "Err! No command found with these params. Please use params like 'dev' or 'prod' (with quotation marks)."
fi