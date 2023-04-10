function solve(object, arr){

const name = object['Browser Name']
let openTabs = object['Open Tabs'];
let closed = object['Recently Closed'];
let logs = object['Browser Logs'];

for (const data of arr) {
    const[type, name] = data.split(' ');

    if(type === 'Close'){
        let index = openTabs.indexOf(name);
        if(index != -1){
            openTabs.splice(index,1);
            closed.push(name);
            logs.push(data);
        }
        
    }else if(type === 'Open'){
        openTabs.push(name);
        logs.push(data);
    }else{
        openTabs =[];
        closed = [];
        logs = [];
    }
  }
  console.log(`${name}`);
  console.log(`Open Tabs: ${openTabs.join(', ')}`);
  console.log(`Recently Closed: ${closed.join(', ')}`);
  console.log(`Browser Logs: ${logs.join(', ')}`);
};
solve(
    {"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)