require('dotenv').config();
const fsLib = require('fs');
const osLib = require('os');
const filePath = osLib.homedir() + process.env.FILE_PATH + "OSInfo.txt";

const writeOSInfo = async() => {
  try {
    fsLib.writeFileSync(filePath,
      'User Info: ' + osLib.userInfo().username +
      '\nPlatform: ' + osLib.platform() +
      '\nVersion: ' + osLib.version() +
      '\nArch: ' + osLib.arch()
    );
    return true;
  }
  catch (error){
    throw (console.log('Error: ' + error));
  }
}

const main = async() => {
  if(fsLib.existsSync(filePath))
    console.log('File already exists');
  else{
    const fileWritten = await writeOSInfo();
    if(fileWritten){
      console.log('OS Information written successfully');
    }
  }
};

main(); 