abstract class Shape extends Component {
    color: Color | undefined = new Color(255);
    stroke: Color | undefined = new Color(0);

    abstract draw(): void;

    settings() {
        if (this.color)
            fill(this.color);
        else
            noFill();

        if (this.stroke)
            stroke(this.stroke);
        else
            noStroke();
    }

    setColor(...args: [r: number, g: number, b: number] | [c: Color] | [gray: number] | [undefined]): Shape {
        if (args[0] == undefined) this.color = undefined;
        else {
            if (!this.color) this.color = new Color(...args);
            else this.color.set(...args);
        }
        return this;
    }

    setStroke(...args: [r: number, g: number, b: number] | [c: Color] | [gray: number] | [undefined]): Shape {
        if (args[0] == undefined) this.stroke = undefined;
        else {
            if (!this.stroke) this.stroke = new Color(...args);
            else this.stroke.set(...args);
        }
        return this;
    }
}

class Rect extends Shape {
    size: Vector;

    constructor(...args: [x: number, y: number] | [v: Vector]) {
        super();
        this.size = new Vector(...args);
    }

    draw() {
        rect(this.gameObject.pos.x - this.size.x / 2, this.gameObject.pos.y - this.size.y / 2, this.size.x, this.size.y);
    }
}