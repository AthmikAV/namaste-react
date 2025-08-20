const parentEl = React.createElement('div',
    {id:'parent'},
    [React.createElement('div',{id:'child'},
        [React.createElement('h1',{},'I am child of parent'),
        React.createElement('h2',{},'this is sibling')
    ]),React.createElement('div',{id:'child'},
        [React.createElement('h1',{},'I am child of parent'),
        React.createElement('h2',{},'this is sibling')
    ])
    ]
);


const rootEl = ReactDOM.createRoot(document.getElementById('root'));
rootEl.render(parentEl);