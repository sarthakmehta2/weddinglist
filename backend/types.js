const zod = require("zod");

const createGuest = zod.object({
    name: zod.string(),
    age: zod.string(),
    departure: zod.string(),
});

const updateGuest = zod.object({
    guestid: zod.string()
})

module.exports = {
    createGuest: createGuest,
    updateGuest: updateGuest
}