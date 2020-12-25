document.addEventListener("turbolinks:load", function() {  
    const svg = document.getElementById('wavy');

    function makePoints() {
        let points = [];
        for (i = 0; i < 500; i++) {
            points.push([i, 25+10*Math.sin(0.25*i)]);
        }
        return points;
    }

    let points = makePoints();

    function makeLines(points) {
        const lines = [];
        for (let i = 0; i < points.length-1; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg','line');
            const attributes = { 'x1': points[i][0], 'y1': points[i][1], 
                                'x2': points[i+1][0], 'y2': points[i+1][1],
                                'stroke': 'black', 'stroke-width': '0.5' };

            for (let attribute in attributes) {
                line.setAttribute(attribute, attributes[attribute]);
            }

            lines.push([line, attributes]);

            svg.append(line);
        }
        return lines;
    }

    const lines = makeLines(points);

    let timestamp = 1;

    function animate() {
        for (let i = 0; i < lines.length; i++) {
            const attributes = lines[i][1];
            const line = lines[i][0];
            attributes['y1'] = 100+3*Math.sin(timestamp*attributes['x1']);
            attributes['y2'] = 100+3*Math.sin(timestamp*attributes['x2']);
            line.setAttribute('y1', attributes['y1']);
            line.setAttribute('y2', attributes['y2']);
        }
        timestamp += 0.01;
        requestAnimationFrame(animate);
    }

    animate(lines);
})
