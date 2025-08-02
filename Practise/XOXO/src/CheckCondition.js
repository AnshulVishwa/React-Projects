export function CheckCondition(arr) {
    // Check rows
    if (arr[0] && arr[0] === arr[1] && arr[1] === arr[2]) return [true , arr[0]];
    if (arr[3] && arr[3] === arr[4] && arr[4] === arr[5]) return [true , arr[3]];
    if (arr[6] && arr[6] === arr[7] && arr[7] === arr[8]) return [true , arr[6]];

    // Check columns
    if (arr[0] && arr[0] === arr[3] && arr[3] === arr[6]) return [true , arr[0]];
    if (arr[1] && arr[1] === arr[4] && arr[4] === arr[7]) return [true , arr[1]];
    if (arr[2] && arr[2] === arr[5] && arr[5] === arr[8]) return [true , arr[2]];

    // Check diagonals
    if (arr[0] && arr[0] === arr[4] && arr[4] === arr[8]) return [true , arr[0]];
    if (arr[2] && arr[2] === arr[4] && arr[4] === arr[6]) return [true , arr[2]];

    return [false , "draw"];
}
