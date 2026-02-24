// Simple automated API tester for local Next dev server
(async () => {
  try {
    const servicesRes = await fetch('http://localhost:3000/api/services');
    const servicesText = await servicesRes.text();
    console.log('---SERVICES---');
    console.log('Status:', servicesRes.status);
    console.log(servicesText);

    const postRes = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: 'Automated Test',
        email: 'test@example.com',
        phone: '+911234567890',
        serviceId: 'plumbing',
        message: 'Test submit from script',
      }),
    });

    console.log('\n---POST /api/contact---');
    console.log('Status:', postRes.status);
    try {
      const json = await postRes.json();
      console.log(JSON.stringify(json, null, 2));
    } catch (e) {
      console.log('No JSON response or invalid JSON:', e.message);
    }
  } catch (err) {
    console.error('Test script error:', err);
    process.exit(1);
  }
})();
