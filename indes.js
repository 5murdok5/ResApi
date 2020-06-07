const http = requiere('http');

http.createServer((res, res) =>{
    res.status = 200;
    res.setheader(`Conten_Type`, 'text/plain');
    res.end('hellow world');
});