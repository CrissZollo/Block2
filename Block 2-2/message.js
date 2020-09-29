
function getFullPath(source, destination, myMap) {

    // eliminate wrong parameters
    if(source < 0 || destination < 0 || destination >= myMap.length || source >= myMap.length)
        return [[]];
    
    // current list of all paths that are unexplored
    let paths = [[source]];
    // is built each iteration and copied to path afterwards
    let npath = [];
    // one of the paths in paths
    let subpath = [];
    // the array containing paths leading to destination
    let cpath = [];
    // array holding the exits from a specific location
    let newexits = [];
    // the new path based on subpath + exits
    let tp=[];

    // error check, is source not even in the map?
    if(source < 0 || source > myMap.length)
        return [];

    while(true) {

        // explore each path in paths
        for(subpath of paths) {
            // find exits for last location in subpath
            newexits = exits(myMap[subpath[subpath.length-1]]);
            // make new paths out of the subpath + exits
            for(nexit of newexits) {
                // is this location not in the path
                //console.log(subpath);
                //console.log(nexit);
                if(!subpath.includes(nexit)) {
                    // copy subpath to tp
                    tp = subpath.slice();
                    // push location to it
                    tp.push(nexit);
                    // are we there yeti?
                    if(nexit == destination)
                        // push it to cpath instead of npath
                        cpath.push(tp);
                    else 
                        npath.push(tp);
                }
            }
        }
        // new paths found during iteration?
        if(npath.length < 1)
            // nope, then we are done
            return cpath;
        // otherwise we copy npath to paths and do it all again
        paths = npath.slice();
        npath = [];
    }
}
