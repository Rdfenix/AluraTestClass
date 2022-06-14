import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate if when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicateIDs when called multiple times`, () => {
    const ids = new Set();

    for (let index = 0; index < 50; index++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number generated ids when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called empty`, () => {
    const emptyValues = [null, undefined, ''];
    emptyValues.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value ${emptyValue}`)
        .toThrow();
    });
  });
});
