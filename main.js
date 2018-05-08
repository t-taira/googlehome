// see. https://github.com/noelportugal/google-home-notifier
const googlehome = require('google-home-notifier');
const language = 'ja';
googlehome.device(process.env.GOOGLE_HOME, language);

const cron = require('node-cron');
cron.schedule('20 5 * * *', function(){
  console.log('散歩の時間です')
  googlehome.notify('散歩の時間です', function(res) {
    console.log(res);
  });
});

cron.schedule('15 6 * * *', function(){
  console.log('朝ごはんの時間です')
  googlehome.notify('朝ごはんの時間です', function(res) {
    console.log(res);
  });
});

cron.schedule('0 12 * * *', function(){
  console.log('腹筋の時間です')
  googlehome.notify('腹筋の時間です', function(res) {
    console.log(res);
  });
});

cron.schedule('0 19 * * *', function(){
  console.log('夜ご飯の時間です')
  googlehome.notify('夜ご飯の時間です', function(res) {
    console.log(res);
  });
});

cron.schedule('45 21 * * *', function(){
  console.log('お風呂を入れて下さい')
  googlehome.notify('お風呂を入れて下さい', function(res) {
    console.log(res);
  });
});

cron.schedule('0 22 * * *', function(){
  console.log('お風呂の時間です')
  googlehome.notify('お風呂の時間です', function(res) {
    console.log(res);
  });
});

cron.schedule('0 23 * * *', function(){
  console.log('そろそろ就寝の時間です')
  googlehome.notify('そろそろ就寝の時間です', function(res) {
    console.log(res);
  });
});

cron.schedule('45 23 * * *', function(){
  console.log('消灯！消灯！')
  googlehome.notify('消灯！消灯！', function(res) {
    console.log(res);
  });
});
