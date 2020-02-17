function drawCircle(myCircle, context) {
    context.beginPath();
    context.arc(myCircle.x, myCircle.y, myCircle.mass, 0, 2 * Math.PI, false);
    context.fillStyle = '#000';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.stroke();
  }
  
  function drawLine(myLine, context) {
    context.beginPath();
    context.moveTo(myLine.x0, myLine.y0);
    context.lineTo(myLine.x, myLine.y);
    context.strokeStyle = 'red';
    context.stroke();
  }


function animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context) {
    mu      =  1+m1/m2;
    d2Theta1  =  (g*(Math.sin(Theta2)*Math.cos(Theta1-Theta2)-mu*Math.sin(Theta1))-(l2*dTheta2*dTheta2+l1*dTheta1*dTheta1*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l1*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
    d2Theta2  =  (mu*g*(Math.sin(Theta1)*Math.cos(Theta1-Theta2)-Math.sin(Theta2))+(mu*l1*dTheta1*dTheta1+l2*dTheta2*dTheta2*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l2*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
    dTheta1   += d2Theta1*time;
    dTheta2   += d2Theta2*time;
    Theta1    += dTheta1*time;
    Theta2    += dTheta2*time;
    myLine1.x  = myCircle1.x;
    myLine1.y  = myCircle1.y;
    myLine2.x0 = myCircle1.x;
    myLine2.y0 = myCircle1.y;
    myLine2.x  = myCircle2.x;
    myLine2.y  = myCircle2.y;
  
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    drawLine(myLine1, context);
    drawLine(myLine2, context);
    drawCircle(myCircle1, context);
}
