
using System.Collections.Generic;

namespace Maze
{

    class Cell
    {

        public int x, y;
        Cell[,] maze;
        public bool MAXWASHERE = false;
        public bool LEFTWALL = true;
        public bool RIGHTWALL = true;
        public bool UPPERWALL = true;
        public bool ANTIUPPERWALL = true;

        public Cell(Cell[,] maze, int x, int y)
        {
            this.maze = maze;
            this.x = x;
            this.y = y;
        }

        public Cell GetNeigbor()
        {
            List<Cell> neighbors = new();


            if (x > 0 && maze[x - 1, y].MAXWASHERE == false)
            {
                neighbors.Add(maze[x - 1, y]);
            }

            if (x < maze.GetLength(0) -1 && maze[x + 1, y].MAXWASHERE == false)
            {
                neighbors.Add(maze[x + 1, y]);
            }

            if (y > 0 && maze[x, y - 1].MAXWASHERE == false)
            {
                neighbors.Add(maze[x, y - 1]);
            }

            if (y < maze.GetLength(1) -1 && maze[x, y + 1].MAXWASHERE == false)
            {
                neighbors.Add(maze[x, y + 1]);
            }


            return null;
        }
    
    public void Draw(Game g)
    {
        int size = Game.CellSize;
        if (UPPERWALL)
        {
            g.DrawRect(this.x * size + size / 2, this.y * size, 1, size);
        }
        if (UPPERWALL)
        {
            g.DrawRect(this.x * size - size / 2, this.y * size, 1, size);
        }
        if (UPPERWALL)
        {
            g.DrawRect(this.x * size, this.y * size + size / 2, size, 1);
        }
        if (UPPERWALL)
        {
            g.DrawRect(this.x * size, this.y * size - size / 2, size, 1);
        }

    }

}
}