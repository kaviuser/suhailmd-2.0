const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "null"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_07_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDcxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQyLFxuICAgICAgICA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk1LFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxODYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcxLFxuICAgICAgICA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGdUVVUnpOSTZkbGdmZm9aMm5MMDhZUXk4U1dabE1tVFAyZ0pEcjU4QUJBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxYkNnNnFjSFN3S09mUWZQZ2ZtcmpRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlkOGMzMDZiLTI0MjctNDIyMC1iOTcwLTdhZWIzOTA0OTZkYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDY3LFxuICAgICAgNzYsXG4gICAgICAxMTQsXG4gICAgICAyMCxcbiAgICAgIDQ1LFxuICAgICAgMjUxLFxuICAgICAgMTI3LFxuICAgICAgMTAxLFxuICAgICAgNDksXG4gICAgICAxMjAsXG4gICAgICAxNyxcbiAgICAgIDIzMSxcbiAgICAgIDg3LFxuICAgICAgNCxcbiAgICAgIDE3MSxcbiAgICAgIDI0OCxcbiAgICAgIDIwMixcbiAgICAgIDI0MSxcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICA2MSxcbiAgICAgIDI0LFxuICAgICAgMzgsXG4gICAgICAxMTAsXG4gICAgICAxMjIsXG4gICAgICA4NyxcbiAgICAgIDE2MixcbiAgICAgIDIxMCxcbiAgICAgIDQwLFxuICAgICAgMzgsXG4gICAgICAxMDMsXG4gICAgICAyOCxcbiAgICAgIDE1NSxcbiAgICAgIDIzNCxcbiAgICAgIDQyLFxuICAgICAgNTIsXG4gICAgICAxMTcsXG4gICAgICAxODQsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUxOQ0FBQTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzE3MjY3NjAyOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MzgzNDUwNDEwNjE0NTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Byc3M2TURFSTNmdWJrR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWmdaVm1zZHA4KzlBWCtxYjdQbjJnZmtob2JzRFJyK1NodFQyL0JwUnlsMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4eWlBVHAvUjgzK2ZNTE5OczYzMldVSEFxY3NPVUMzTVRobERyNGljenVtVTdqMkFNY3hCZVpleFFkbEl4QXN2VzlCZ20rTVNMQXJzbjhOMjNnMUlEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRVHJHaWdtenNhYndKMDJ6VWJHb2hGZkpTR1JXc3JHb2hxNEJINkRVOWRkOUxxU3RBSlFXYXBEaGtFNjd4RUtLZ3NRbUJnOWVzTTJFTXFCdEF4N0RpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxNzI2NzYwMjo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDk2NDY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjJoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGMmguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2SW9oTnJqYTdWVDg1VlZMdm85RUtMa3Q1dXU2TU54a2htNE10U0ZPRDVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg3OTU1NjIxOCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMTczMTA5NjIzNDkyNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "KAVIYA-XMD",
  botname : process.env.BOT_NAME  || "KAVIYA-XMD",
  ownername:process.env.OWNER_NAME|| "KAVI-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
