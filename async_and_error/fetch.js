async function fetchUser(id) {
    try {
        const res = await fetch(`https://api.github.com/users/${id}`);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        console.log(data.login, data.name);
    } catch (err) {
        console.error('could not load user: ', err.message);
    }
}

await fetchUser('esthxr');
await fetchUser('no-such-user-xyz-123');

console.log('Done');