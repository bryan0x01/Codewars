// You are given a node that is the beginning of a linked list. This list contains a 
// dangling piece and a loop. Your objective is to determine the length of the loop.
// For example in the following picture the size of the dangling piece is 3 and the 
// loop size is 12:

// Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next

//Notes:
// do NOT mutate the nodes!
// in some cases there can be just a loop, with no dangling piece.
// Don't miss dmitry's article in the discussion after you pass the Kata !!

function loop_size(node) {
  function getNext(n) {
    if (n === null) return null;
    if (typeof n.getNext === "function") {
      return n.getNext();
    }
    return n.next;
  }

  let slow = node;
  let fast = node;

  while (true) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));

    if (slow === fast) {
      break;
    }
  }

  let count = 1;
  let current = getNext(slow);

  while (current !== slow) {
    count++;
    current = getNext(current);
  }

  return count;
}

//This was one of the harder problems. It helped me understand how slow and fast 
//pointers work to detect loops, and how to carefully count the loop size without 
//modifying the list.