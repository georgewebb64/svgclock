var currentBlock = document.getElementById("blockOne");


function expansion(block) 
{
  var blockAdjust = 15;
  var blockMaxSize = 100;
  
  
  var blockSize = blockOne.getAttribute('width');
  
  blockSize = blockAdjust + parseInt(blockSize,10);
 
  
  var blockX = block.getAttribute('x');
  var blockY = block.getAttribute('y');
 
  if (blockSize > blockMaxSize)
  {
    blockAdjust = -blockSize;
    blockSize = 0;
    // maybe have a decision here to move to the next block
//    currentBlock = block2?
    
  }
  
  block.setAttribute('width', blockSize);
  block.setAttribute('height', blockSize);
 
  blockX -= blockAdjust/2;
  blockY -= blockAdjust/2;
  
  blockOne.setAttribute('x', blockX);
  blockOne.setAttribute('y', blockY);
  
}
  
//run the expansion function every 1000ms (1s)
setInterval( function() { expansion(currentBlock);
                        }, 800 );  
