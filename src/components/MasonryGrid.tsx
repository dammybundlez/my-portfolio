const items = [
  {
    id: 1,
    title: 'Expense Tracker',
    desc: "lorem20hlife is to sit and thinkk about lfe nd knwi thw next steo to take ",
    image: 'https://plus.unsplash.com/premium_photo-1749668819550-43e7a3712a31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Firebase'],
  },
  {
    id: 2,
    title: 'Weather App',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus sed totam, molestiae dolor provident alias, consequuntur nihil eaque, atque voluptatibus aliquid perspiciatis odio unde aliquam repellendus earum quis vitae molestias.',
    image: 'https://plus.unsplash.com/premium_photo-1749668819550-43e7a3712a31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',
    tech: ['Next.js', 'OpenWeatherMap'],
  },
  {
    id: 3,
    title: 'Chat App',
    image: 'https://images.unsplash.com/photo-1750837496753-d223cfc91fd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Socket.io'],
  },
  {
    id: 4,
    title: 'Chat App',
    image: 'https://images.unsplash.com/photo-1750837496753-d223cfc91fd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Socket.io'],
  },{
    id: 5,
    title: 'Chat App',
    image: 'https://images.unsplash.com/photo-1750912228794-92ec92276a50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Socket.io'],
  }
];

export default function MasonryGrid() {
  return (
        <div className='bg-red-300 w-full flex items-center justify-center'>
            {items.map((item) => (
                
            ))}
        </div>
  );
}
