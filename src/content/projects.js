import tictactoe from '../img/tictactoe.png'
import deconnector from '../img/devconnector.png'
import chatapp from '../img/chatapp.png'

export default [
    {
        title: 'Tic Tac Toe',
        description:
        'A multiplayer tic tac toe application. Front-end built using ReactJS, Material UI and vanilla CSS. Backend built using NodeJS and Socket.IO library for websockets.',
        image: tictactoe,
        links: {
            github: 'https://github.com/rbajaj1997/tic-tac-toe',
            preview: 'https://rohit-tic-tac-toe.herokuapp.com/',
        }
    },
    {
        title: 'Dev Connector',
        description:
            'Social Media for developers! A place where developers can register, create profile, network, write blog posts, comment & like on other blog posts and much more! I built this while going through Brad Traversy\'s Udemy course. Front-end built using ReactJS, Redux for state management and vanilla CSS. Backend built using NodeJS and Express.',
        image: deconnector,
        links: {
            github: 'https://github.com/rbajaj1997/Dev-Connector',
            preview: 'https://rohit-dev-connect.herokuapp.com/',
        }
    },
    {
        title: 'Chat App',
        description:
            'A group chat application. This also supports advanced features like creating different groups and sending current location. Front-end built using vanilla CSS. Backend built using NodeJS and Socket.IO library for websockets.',
        image: chatapp,
        links: {
            github: 'https://github.com/rbajaj1997/node-chat-app',
            preview: 'https://rohit-node-chat-app.herokuapp.com/',
        }
    }
]