import cookies from "./cookies";
const { uuid } = require('uuidv4');

// Info: Replace this with a different underlining storage mech such as an api layer.
//       This example uses cookies to keep the cost in aws low. 
//       I recommend expressjs + redis.

const state = {
    /**
     * Gets an state-uuid representing unique state by name
     * @param {string} name - Name of the cookie variable
    */
    getId: (name) => {
        if (cookies.exists(name)) {
            return cookies.get(name);
        } else {
            var id = uuid();
            cookies.set(name, id);
            return id;
        }
    },
    
    /**
     * Gets state using the generated state-uuid
     * @param {string} id - The state-uuid where state is held
    */
    getState: (id) => {
        var val = cookies.get(id);
        if (val === undefined) { 
            return {};
        }
        return JSON.parse(cookies.get(id));
    },
    
    /**
     * Gets a nested object from state using the generated state-uuid
     * @param {string} id - The state-uuid where state is held
     * @param {string} name - The name of the object stored
    */
    getStateElement: (id, name) => {
        var val = state.getState(id);
        return val[name];
    },

    /**
     * Sets state using the generated state-uuid, replaces anything stored here.
     * @param {string} id - state-uuid where state is held
     * @param {string} name - The name of the object to store
     * @param {object} value - The object to store in state
    */
    setState: (id, name, value) => {
        var obj = {};
        obj[name] = value;
        cookies.set(id, JSON.stringify(obj));
    },

    /**
     * Sets/Appends state using the generated state-uuid, appends to anything stored here.
     * @param {string} id - state-uuid where state is held
     * @param {string} name - The name of the object to store
     * @param {object} value - The object to store in state
    */
    appendState: (id, name, value) => {
        var obj = state.getState(id);
        obj[name] = value;
        cookies.set(id, JSON.stringify(obj));
    }
}
export default state;
  