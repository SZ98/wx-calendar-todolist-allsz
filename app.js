//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      traceUser: true,
    })
  },
  globalData: {
  }
,


  writeHistory: function (agenda, timestamp) {
    var history = wx.getStorageSync('history') || [];
    history.push({
      agenda: agenda ? {
        content: agenda.content || '',
        time: agenda.agenda_time || '',
        date: agenda.agenda_date || ''
      } : null,
      timestamp: timestamp
    });
    wx.setStorageSync('history', history);
  }


})