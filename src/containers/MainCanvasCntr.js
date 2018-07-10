import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainCanvas from '../components/MainCanvas/MainCanvas';

class MainCanvasCntr extends Component {
  constructor () {
    super();
    this.state = {
      mouse: { x: 0, y: 0 },
      inCanvas: false,
      dragging: false,
      focus: false,
      brushPoints: []
    }
  }

  engage = (canvas, e) => {
    this.setState({ dragging: true, focus: true });
    this.putPoint(canvas, e, true);  // A point is drawn
  }

  disengage = (canvas) => {
    this.setState({ inCanvas: false, dragging: false, focus: false, brushPoints: [] });
    canvas.getContext('2d').beginPath();  // The path is reset, so the paths aren't connected
  }

  putPoint = (canvas, e, fire) => {
    const { dragging, brushPoints } = this.state;
    const { paintBrush, eraser } = this.props.tools;
    const context = canvas.getContext('2d');

    const tool = paintBrush.selected ? paintBrush : eraser;

    const mouse = this.canvasMousePosition(canvas, e);

    if ( dragging || fire ) {
      context.lineWidth = tool.radius * 2;
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.strokeStyle = '#000000';
      context.fillStyle = '#000000';

      if (brushPoints.length < 3) {
        context.beginPath();
        context.arc(mouse.x, mouse.y, context.lineWidth / 2, 0, Math.PI * 2, !0);
        context.fill();
        context.closePath();
      } else {
        context.beginPath();
        context.moveTo(brushPoints[0], brushPoints[0]);

        for (let i = 1; i < brushPoints.length - 2; i++) {
          const c = (brushPoints[i].x + brushPoints[i + 1].x) / 2;
          const d = (brushPoints[i].y + brushPoints[i + 1].y) / 2;
          
          context.quadraticCurveTo(brushPoints[i].x, brushPoints[i].y, c, d);
        }

        // Draw Stroke
        context.stroke();
      }

      // Brush position points are saved for smooth lines
      this.saveBrushPoints(mouse);

      // The mouse position is set
      this.mousePosition(e);
    }
  }

  saveBrushPoints = (mouse) => {
    this.setState(prev => {
      const brushPoints = prev.brushPoints;
      brushPoints.push({ x: mouse.x, y: mouse.y });
      return { brushPoints };
    });
  }

  canvasMousePosition = (canvas, e) => ({
    x: e.clientX - canvas.offsetLeft + window.pageXOffset,
    y: e.clientY - canvas.offsetTop + window.pageYOffset
  })

  mousePosition = (e) => {
    this.setState({ 
      mouse: { x: e.clientX, y: e.clientY }, 
      inCanvas: true 
    });
  }

  mouseLeave = () => {
    this.setState({ inCanvas: false });
  }

  render() {
    return (
      <MainCanvas
        mouse={ this.state.mouse }
        focus={ this.state.focus }
        inCanvas={ this.state.inCanvas }
        engage={ this.engage }
        putPoint={ this.putPoint }
        disengage={ this.disengage }
        mousePosition={ this.mousePosition }
        mouseLeave={ this.mouseLeave } />
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(MainCanvasCntr);