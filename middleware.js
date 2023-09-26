

function restrictAccess(req, res, next) {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const hour = now.getHours();
  
  
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
    
      next();

    } else {

      res.status(403).send('Access Denied: The application is only available during working hours.');
    }
  }
  
  module.exports = {
    restrictAccess,
  };