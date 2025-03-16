---
id: 3
title: "LZW / Huffman Compression"
category: "Software Development"
thumbnail: "../photos/Huffman.jpg"
technologies: ["Java", "Data Structures", "Algorithms"]
---

# LZW / Huffman Compression Algorithms

A Java console application that implements LZW and Huffman compression algorithms for efficient data storage and transmission.

## Project Overview

This project explores two fundamental data compression algorithms:

1. **Lempel-Ziv-Welch (LZW)** compression, which builds a dictionary of sequences found in the data
2. **Huffman Coding**, which uses variable-length codes for characters based on their frequency

## Implementation

The application was developed in Java and features:

- Command-line interface for compressing and decompressing files
- Performance metrics to compare compression ratios
- Memory usage optimization for handling larger files
- Visualization of the Huffman tree structure

## Code Example: Huffman Tree Construction

```java
private HuffmanNode buildHuffmanTree(Map<Character, Integer> frequencies) {
    PriorityQueue<HuffmanNode> queue = new PriorityQueue<>();

    // Create leaf nodes for each character
    for (Map.Entry<Character, Integer> entry : frequencies.entrySet()) {
        queue.add(new HuffmanNode(entry.getKey(), entry.getValue()));
    }

    // Build the tree by combining nodes
    while (queue.size() > 1) {
        HuffmanNode left = queue.poll();
        HuffmanNode right = queue.poll();

        HuffmanNode parent = new HuffmanNode('\0',
                              left.frequency + right.frequency);
        parent.left = left;
        parent.right = right;

        queue.add(parent);
    }

    return queue.poll();
}
```

## Performance Analysis

Testing revealed interesting performance characteristics:

| Algorithm | Text Files | Binary Files | Image Files |
| --------- | ---------- | ------------ | ----------- |
| LZW       | 40-60%     | 30-40%       | 10-20%      |
| Huffman   | 30-50%     | 20-30%       | 15-25%      |

## Learning Outcomes

This project deepened my understanding of:

- Advanced data structures (trees, priority queues, dictionaries)
- Time and space complexity analysis
- Trade-offs in algorithm design
- Binary file manipulation in Java

## Future Enhancements

- Implement additional compression algorithms (e.g., DEFLATE)
- Create a graphical user interface
- Add batch processing capabilities
- Optimize for specific file types
