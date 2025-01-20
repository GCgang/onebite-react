import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useRef,
} from 'react';

export interface DiaryEntry {
  id?: number;
  createDate: number;
  emotionId: number;
  content: string;
}

export type State = DiaryEntry[];

interface AddEntryAction {
  type: 'CREATE';
  data: DiaryEntry;
}

interface RemoveEntryAction {
  type: 'DELETE';
  data: { id: number };
}

interface UpdateEntryAction {
  type: 'UPDATE';
  data: DiaryEntry;
}

type Action = AddEntryAction | RemoveEntryAction | UpdateEntryAction;

const mockData: State = [
  {
    id: 1,
    createDate: new Date('2025-01-20').getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createDate: new Date('2025-01-12').getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
  {
    id: 3,
    createDate: new Date('2024-12-25').getTime(),
    emotionId: 3,
    content: '3번 일기 내용',
  },
];

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'DELETE':
      return state.filter((entry) => entry.id !== action.data.id);
    case 'UPDATE':
      return state.map((entry) =>
        entry.id === action.data.id ? action.data : entry
      );
    default:
      return state;
  }
}
const DiaryStateContext = createContext<State | null>(null);
const DiaryDispatchContext = createContext<{
  onCreate: (entry: DiaryEntry) => void;
  onDelete: (id: number) => void;
  onUpdate: (entry: DiaryEntry) => void;
} | null>(null);

export default function DiaryContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef<number>(mockData.length + 1);

  const onCreate = (entry: DiaryEntry) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        ...entry,
      },
    });
  };

  const onDelete = (id: number) => {
    dispatch({
      type: 'DELETE',
      data: { id },
    });
  };

  const onUpdate = (entry: DiaryEntry) => {
    dispatch({
      type: 'UPDATE',
      data: entry,
    });
  };

  return (
    <DiaryStateContext.Provider value={state}>
      <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
        {children}
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export const useDiary = () => {
  const context = useContext(DiaryStateContext);
  if (!context) {
    throw new Error('useContext 에러');
  }
  return context;
};

export const useDiaryDispatch = () => {
  const context = useContext(DiaryDispatchContext);
  if (!context) {
    throw new Error('useContext 에러');
  }
  return context;
};
