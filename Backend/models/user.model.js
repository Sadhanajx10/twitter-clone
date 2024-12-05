import mongoose  from "mongoose";
/*Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js. 
It provides a straightforward, schema-based solution to model your application data. 
*/

const userSchema = new mongoose.Schema({ // schema can enforce structure on your documents and validate the data before it gets saved to the database.
    username:{
        type: String,
        required: [true, 'Username is required'],
        unique: true,
    },
    fullName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: [6, 'Password must be atleast 6 character long'],
    },
    email:{
        type:String,
        required: [true, 'Email is required'],
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
        unique: true,
    },
    followers:[
        {
            type: mongoose.Schema.Types.ObjectId, // useful for modeling relationships between entities, such as users and their followers, posts and their authors, or orders and their products.
            ref: 'User',
            default: [],
        }
    ],
    following:[
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User',
            default: [],
        }
    ],
    profileImg:{
        type: String,
        default: "",
    },
    coverImg:{
        type:String,
        default: "",
    },
    bio:{
        type: String,
        default: "",
    },
    link:{
        type: String,
        default: "",
    },
    likedPosts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"post",
            default:[],
        },
    ],
}, 
    {timestamps: true}
); //timestamps will give the created at and updated at the field for a user ( e.g to show the member since 'date') 


const User = mongoose.model("User", userSchema);


export default User;


