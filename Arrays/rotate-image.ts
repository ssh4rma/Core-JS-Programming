// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

function rotate(matrix: number[][]): void {
  let N : number = matrix.length;
  
  for(let i : number = 0; i < N; ++i) {
    for(let j : number = i + 1; j < N; ++j) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for(let i : number = 0; i < N; ++i) {
    matrix[i].reverse();
  }
};

let matrix : number[][] = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix);
console.log(matrix);
