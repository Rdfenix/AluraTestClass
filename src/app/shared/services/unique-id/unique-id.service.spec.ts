import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate if when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicateIDs when called multiple times`, () => {
    const service = new UniqueIdService();
    const ids = new Set();

    for (let index = 0; index < 50; index++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number generated ids when called`, () => {
    const service = new UniqueIdService();
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
});
