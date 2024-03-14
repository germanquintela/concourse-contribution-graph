import { useState, useEffect } from 'react';
import { getContributions } from '../services/getContributions';
import { ContributionType } from '../types/contributions';

const useFetchContributions = () => {
  const [contributions, setContributions] = useState<ContributionType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContributions();
        setContributions(data)
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { contributions, loading, error };
};

export default useFetchContributions;
