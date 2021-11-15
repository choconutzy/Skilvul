import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const newItem = {
    id: 4,
    name: 'Jeng Jeng Jeng',
    isComplete: false,
  }
  const defaultList = [
    {
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },
    {
      id: 3,
      name: 'Ship it',
      isComplete: false,
    }
  ];
  const expectedResult = JSON.stringify([newItem,...defaultList])
  // Act
  const actualResult = JSON.stringify(AddTodo(defaultList, newItem))
  // Assert
  expect(actualResult).toBe(expectedResult)
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const newItem = {
    id: 4,
    name: 'Jeng Jeng Jeng',
    isComplete: false,
  }
  const defaultList = [
    {
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },
    {
      id: 3,
      name: 'Ship it',
      isComplete: false,
    }
  ]
  const expectedResult = JSON.stringify(defaultList)
  // Act
  const actualResult = JSON.stringify(AddTodo(defaultList, newItem))
  // Assert
  expect(actualResult).not.toBe(expectedResult)
})