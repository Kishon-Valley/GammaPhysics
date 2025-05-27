import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="overflow-hidden bg-white rounded-xl shadow-lg transition-transform transform cursor-pointer hover:scale-105"
      onClick={() => navigate(`/topic/${topic.id}`)}
    >
      <img 
        src={topic.image} 
        alt={topic.title} 
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{topic.title}</h3>
        <p className="mb-4 text-gray-600">{topic.description}</p>
        <div className="flex items-center text-blue-600">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  );
}