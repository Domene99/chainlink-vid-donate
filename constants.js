export const addressProcessor = "0x96Ca6d78C3C20cB6cc8fF3eA3f707352cd969E47";
export const abiProcessor = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "donor",
        type: "address",
      },
    ],
    name: "addDonor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_vidId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_swear_count",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "_topicKeys",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_topicValues",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "_safety_score",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "_languages",
        type: "string[]",
      },
    ],
    name: "addVideo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numElements",
        type: "uint256",
      },
    ],
    name: "getProcessedVideos",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "vidId",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "swear_count",
            type: "uint256",
          },
          {
            internalType: "string[]",
            name: "topicKeys",
            type: "string[]",
          },
          {
            internalType: "string[]",
            name: "topicValues",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "safety_score",
            type: "uint256",
          },
          {
            internalType: "string[]",
            name: "languages",
            type: "string[]",
          },
          {
            internalType: "address[]",
            name: "donors",
            type: "address[]",
          },
        ],
        internalType: "struct VideoProcessing.Video[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getVideo",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "vidId",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "swear_count",
            type: "uint256",
          },
          {
            internalType: "string[]",
            name: "topicKeys",
            type: "string[]",
          },
          {
            internalType: "string[]",
            name: "topicValues",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "safety_score",
            type: "uint256",
          },
          {
            internalType: "string[]",
            name: "languages",
            type: "string[]",
          },
          {
            internalType: "address[]",
            name: "donors",
            type: "address[]",
          },
        ],
        internalType: "struct VideoProcessing.Video",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVideoCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getVideoOwner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "processed_videos",
    outputs: [
      {
        internalType: "address payable",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "vidId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "swear_count",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "safety_score",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const addressDonor = "0xB8172Bd95dfE964F54B2C8ef1d5D6F501193a0DE";
export const abiDonor = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "vidId",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "swear_count",
            type: "uint256",
          },
          {
            internalType: "string[]",
            name: "topicKeys",
            type: "string[]",
          },
          {
            internalType: "string[]",
            name: "topicValues",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "safety_score",
            type: "uint256",
          },
          {
            internalType: "string[]",
            name: "languages",
            type: "string[]",
          },
          {
            internalType: "address[]",
            name: "donors",
            type: "address[]",
          },
        ],
        internalType: "struct VideoProcessing.Video",
        name: "video",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "maxSwearCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minSafetyScore",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "language",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "topics",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "sentiments",
        type: "string[]",
      },
    ],
    name: "_matchesCriteria",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "videoProcessing",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxSwearCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minSafetyScore",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "language",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "topics",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "sentiments",
        type: "string[]",
      },
    ],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "done",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "vidId",
        type: "string",
      },
    ],
    name: "finishedTranscoding",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "_done",
        type: "bool",
      },
    ],
    name: "fulfill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isRequestComplete",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeoutDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeoutTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawLink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const url = "https://api.openai.com/v1/audio/transcriptions";
export let prompts = [
  'System: Respond with an integer, include no added commentary, preamble or explanation in your response \
  User: In this text, how many swear words are there? "fucking bitch" \
  chatgpt: 2 \
  User: In this text how many swear words are there? "Hello" \
  chatgpt: 0 \
  User: In this text how many swear words are there? " ',

  'System: Respond with a dictionary, include no added commentary, preamble or explanation in your response \
  User: In this text what are the main topics that are mentioned and what is the sentiment of each one("positive", "negative", "neutral")? "I like iPhones and hate Androids" \
  chatgpt: {"iPhones": "positive", "Androids": "negative"} \
  User: In this text what are the main topics that are mentioned and what is the sentiment of each one("positive", "negative", "neutral")? ',

  'System: Respond with a list, include no added commentary, preamble or explanation in your response \
  User: What human languages is the text communicating in? "I like iPhones and hate Androids"hola es saludo. hello is a greeting" \
  chatgpt: [English, Spanish] \
  What human languages is the text communicating in? "',

  'System: Respond with a list, include no added commentary, preamble or explanation in your response \
   User:Assign a brand safety score from 0 - 100 where 0 is completely unsafe and 100 is completely safe to this text: "I love vaping" \
   chatgpt: 65 \
   User:Assign a brand safety score from 0 - 100 where 0 is completely unsafe and 100 is completely safe to this text: "',
];
