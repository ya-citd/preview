const EVENTS = {};

window.addEventListener('storage', function(e) {
    if (e.storageArea === localStorage && e.key.startsWith('event-')) {
        trigger1(e.key, e.newValue);
    }
});

function bind1(name, fn) {
    !EVENTS[name] && (EVENTS[name] = []);   
    EVENTS[name].push(fn); 
}

function trigger1(name, data) {
    (EVENTS[name] || []).forEach(fn => {
        try { fn(data); } catch (e) { console.error(e); }
    });
}