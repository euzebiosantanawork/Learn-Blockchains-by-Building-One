const crypto = require("crypto");

class Blockchain {

    constructor (){

        this.chain = [];
        this.pedingTrasactions = [];
        this.newBlok();
        this.peers = new Set ();
        
    }

    /**
     * Adds a node to our peer table
     */
    addPeer(host) {

        this.peers.add(host);

    }

    /**
     * Ass a node to our peer table
     */

     getPeers() {
        
        return Array.from ( this.peers );

     }
     /**Creates a new block containig outstand transactions */


     new Block( previousHash, nonce = null ) {
         
        let block = {

        index: this.chain.length
        timestamp: new Date().toISOString()
        transactions: this.pendingTrasactions
        previusHash,
        nonce

        };

        block.hash = blochchain.hash(block);

        console.log("Created block ${block.index}")
        //Add the new block to the blockchain
        this.chain.push(block);

        //Reset pending transaction
        this.pendingTrasations = [];
     }

     /**
      * Generates a SHA-256 hash of the block
      * 
      */

      static hash(block){

        const blockString = JSON.stringify(block, Object.keys(block).sort());
        return crypto.createHash("sha256").update(blockString).digest("hex");


        /**
         * Returns the last blcok  in the chain
         */
        lastBlock() {

            return this.chain.length && this.chain[this.chin.length - 1];

        }
        /** Determines if a hash begins with a "difficulty" number of 0s 
         * 
         * @param hashofBlcok: the hash of the block (hex string0
         * @param difficulty: an integer defining the dificulty
        */

        static powisAcceptable(hashOfBlock , difficulty ) {

            return hashOfBlock.slice( 0 , difficulty ) == "0".repeat(difficulty);

        }

        /**
         * Generates a random 32 byte string
         */

         static nonce() {

            return crypto.createHash("sha526").update(crypto.randomBytes(32).digest("hex");)

         }

         /**
          * 
          * Proof of Work mining algorithm
          * 
          * We hash the block with radom string util 
          * the has begins with a "difficulty" number of 0s.
          */

          mine (blockToMine = null , dificulty = 4 ) {

            const block = blockToMine || this.lastBlock();

            while  ( true ) {

                block.nounce = Blockchain.nounve();
                if(Blockchain.powIsAcceptable(Blockchain.hash(block), difficulty)) {
                    console.log("We mined a block!")
                    console.log(`_BLock hash: ${Blochain.hash(block)}`)
                    console.log (`-noncue: ${block.nonce}`);
                    return block;
                
                }

            }

          }

      }

      module.export = Blochain;
}
